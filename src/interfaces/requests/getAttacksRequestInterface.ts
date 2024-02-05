interface GetAttacksRequestInterface {
    startDateTime: string,
    endDateTime: string,
    page: number,
    pageSize: number,
    sortBy: "date" | null
}

export default GetAttacksRequestInterface;