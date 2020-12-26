export interface IChoiceTypes {
    id: string
    question_id: string,
    text: string
    isSelected: boolean
    setIsSelected?: () => void
}
