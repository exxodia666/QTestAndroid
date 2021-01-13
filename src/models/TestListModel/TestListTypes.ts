import status from "../../enum/status";
import ITestTypes from "../TestModel/ITestTypes";

type TestListType = {
    test_list: ITestTypes[]
    status: status
    errors: null | string
    fetchTests: () => void
}

export default TestListType;