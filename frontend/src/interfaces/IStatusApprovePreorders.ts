export interface StatusApprovePreordersesInterface {
    ID?: number; 
    StatusApprovePreorderID?: number;
    StatusApprovePreorder?: StatusApprovePreordersInterface;
    PreorderID?: number;
    Preoeder?: PreordersInterface;
} 

import { PreordersInterface } from "./IPreorder";
import { StatusApprovePreordersInterface } from "./IStatusApprovePreorder";