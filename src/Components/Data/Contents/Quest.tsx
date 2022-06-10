export interface IQuest {
    id: number;
    type_a: any;
    type_b: any;
    result: number; // 0 == a, 1 == b
}

export const QuestContents: IQuest[] = [
    {
        id: 8,
        type_a: "마지막",
        type_b: "문제",
        result: 1,
    },
    {
        id: 7,
        type_a: "뱀",
        type_b: "용",
        result: 2,
    },
    {
        id: 6,
        type_a: "너구리",
        type_b: "병아리",
        result: 1,
    },
    {
        id: 5,
        type_a: "병아리",
        type_b: "닭",
        result: 2,
    },
    {
        id: 4,
        type_a: "코뿔소",
        type_b: "코끼리",
        result: 1,
    },
    {
        id: 3,
        type_a: "강아지",
        type_b: "고양이",
        result: 2,
    },
    {
        id: 2,
        type_a: "박쥐",
        type_b: "독수리",
        result: 1,
    },
    {
        id: 1,
        type_a: "돼지",
        type_b: "소",
        result: 1,
    },
    {
        id: 0,
        type_a: "곰",
        type_b: "호랑이",
        result: 2,
    },
]

