export interface Pagination {
    page: number;
    size: number;
    filter: { [key: string]: any };
    pageable?: {
        pageNumber: number;
        pageSize: number;
    };
}


export interface PaginableResponse {
    pageable: {
        pageNumber: number,
        pageSize: number,
    },
    totalElements: number,
}
