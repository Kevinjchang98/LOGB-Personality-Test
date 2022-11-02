'use client';

import { createStyles, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
    const [state, handlers] = useListState(data);
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsBrowser(true);
        }
    }, []);

    useEffect(() => {
        setScores((prev: Array<Array<number>>) => {
            const newScores = [...prev];

            for (let i = 0; i < state.length; i++) {
                newScores[questionIndex][
                    // @ts-ignore
                    personalityScoreIndex[state[i].category]
                ] = 4 - i;
            }

            return newScores;
        });
    }, [state]);

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
        <>
            <DragDropContext
                onDragEnd={({ destination, source }) =>
                    handlers.reorder({
                        from: source.index,
                        to: destination?.index || 0,
                    })
                }
            >
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
        </>
    );
}
