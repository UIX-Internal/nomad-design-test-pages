import test_0_a from "Assets/Images/Quest/test-a.png"
import test_0_b from "Assets/Images/Quest/test-b.png"

export interface IQuest {
    id: number;
    type_a: string;
    type_b: string;
    result: number; // 0 == a, 1 == b
}

export const QuestContents: IQuest[] = [
    {
        id: 9,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
    {
        id: 8,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
    {
        id: 7,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 2,
    },
    {
        id: 6,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
    {
        id: 5,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 2,
    },
    {
        id: 4,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
    {
        id: 3,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 2,
    },
    {
        id: 2,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
    {
        id: 1,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
    {
        id: 0,
        type_a: test_0_a,
        type_b: test_0_b,
        result: 1,
    },
]

