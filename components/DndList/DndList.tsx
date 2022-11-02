'use client';

import { createStyles, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Mantine way to style its components
const useStyles = createStyles((theme) => ({
    item: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.radius.md,
        border: `1px solid ${theme.colors.gray[2]}`,
        padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
        backgroundColor: theme.white,
        marginBottom: theme.spacing.sm,
        minWidth: '300px',
    },

    itemDragging: {
        boxShadow: theme.shadows.sm,
    },

    symbol: {
        fontSize: 30,
        fontWeight: 700,
        width: 60,
    },
}));

interface DndListProps {
    data: {
        description: string;
        category: string;
    }[];
    setScores: Function;
    questionIndex: number;
}

// Used to index scores array
enum personalityScoreIndex {
    L = 0,
    O = 1,
    G = 2,
    B = 3,
}

export default function DndList({
    data,
    setScores,
    questionIndex,
}: DndListProps) {
    const { classes, cx } = useStyles();
    // State of dnd list
    const [state, handlers] = useListState(data);
    // If currently rendered in browser
    const [isBrowser, setIsBrowser] = useState(false);

    // If currently browser, set isBrowser
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsBrowser(true);
        }
    }, []);

    // Update scores array every time cards have been moved
    useEffect(() => {
        setScores((prev: Array<Array<number>>) => {
            // Copy previous scores
            const newScores = [...prev];

            // Modify this question's scores to be new scores
            for (let i = 0; i < state.length; i++) {
                newScores[questionIndex][
                    // @ts-ignore
                    personalityScoreIndex[state[i].category]
                ] = 4 - i;
            }

            return newScores;
        });
    }, [state]);

    // Cards to be rendered
    const items = state.map((item, index) => (
        <Draggable
            key={item.category + questionIndex}
            index={index}
            draggableId={item.category + questionIndex}
        >
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, {
                        [classes.itemDragging]: snapshot.isDragging,
                    })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Text className={classes.symbol}>{item.category}</Text>
                    <div>
                        <Text>{item.description}</Text>
                    </div>
                </div>
            )}
        </Draggable>
    ));

    return (
        <DragDropContext
            onDragEnd={({ destination, source }) =>
                handlers.reorder({
                    from: source.index,
                    to: destination?.index || 0,
                })
            }
        >
            {/* Only render cards if we're in a browser */}
            {isBrowser ? (
                <Droppable droppableId="dnd-list" direction="vertical">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {items}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ) : null}
        </DragDropContext>
    );
}
