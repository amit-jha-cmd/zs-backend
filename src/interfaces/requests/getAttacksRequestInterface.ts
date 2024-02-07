interface GetAttacksRequestInterface {
  startDateTime: string;
  endDateTime: string;
  page: number;
  pageSize: number;
  sortBy: string | undefined;
}

export default GetAttacksRequestInterface;
