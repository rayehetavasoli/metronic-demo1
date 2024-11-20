
//Users
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}

export interface HeaderSectionProps {
  onAddUser: (user: User) => void;
  onSearch: (query: string) => void;
}

export interface UserTableProps {
  data: User[];
  onEdit: (user: User) => void; 
  onDelete: (user: User) => void; 
}
export interface EditUserProps {
  user: User; 
  onClose: () => void;  
  onUpdate: (updatedUser: User) => void; 
}
export interface ActionButtonsProps {
  onEdit: () => void; 
  onDelete: () => void; 
}
export interface DeleteUserProps {
  user: User;
  onCancel: () => void;
  onDelete: () => void;
}

export interface AddUserProps {
  user: User; 
  onClose: () => void;  
  onAdd: (addUser: User) => void; 
}

export type UserFormMode = 'add' | 'edit';

export interface UserFormProps {
  user?: User; // این پراپ اختیاری است، چون در حالت افزودن نیازی به مقدار اولیه نیست.
  onClose: () => void; // تابع بستن فرم
  onSave: (user: User) => void; // تابع ذخیره که کاربر جدید یا ویرایش‌شده را می‌گیرد
  mode: UserFormMode; // مشخص می‌کند که فرم در حالت افزودن یا ویرایش است
}

//ElevatorParts
export interface Part{
  id: number;
  partType: string;
  partBrand: string;
}

export interface PartTableProps {
data: Part[]; 
onEdit: (part: Part) => void; 
onDelete: (part: Part) => void; 
}

export interface EditPartProps {
part: Part; 
onClose: () => void;  
onUpdate: (updatedPart: Part) => void; 
}

export interface DeletePartProps {
part: Part;
onCancel: () => void;
onDelete: () => void;
}

export interface AddPartProps {
part: Part; 
onClose: () => void;  
onAdd: (addPart: Part) => void; 
}

export interface HeaderSectionPropsPart {
onAddPart: (part: Part) => void;
onSearch: (query: string) => void;
}

export interface PaginationProps {
totalPages: number;             
currentPage: number;          
onPageChange: (page: number) => void;  
}
export interface FooterProps {
pageSize: number;     
onPageSizeChange: (size: number) => void;
currentPage: number;                    
totalPages: number;                   
onPageChange: (page: number) => void;   
}

export type PartFormMode = 'add' | 'edit';

export interface PartFormProps {
part?: Part; // این پراپ اختیاری است، چون در حالت افزودن نیازی به مقدار اولیه نیست.
onClose: () => void; // تابع بستن فرم
onSave: (part: Part) => void; // تابع ذخیره که برند جدید یا ویرایش‌شده را می‌گیرد
mode: PartFormMode; // مشخص می‌کند که فرم در حالت افزودن یا ویرایش است
}


//هزینه بازرسی استاندارد 
export interface InspectionCost {
  id: number;
  inspectionType: string; // نوع بازرسی
  cost: number; // هزینه بازرسی
}


export interface InspectionCostTableProps {
data: InspectionCost[]; 
onEdit: (inspectionCost: InspectionCost) => void; 
onDelete: (inspectionCost: InspectionCost) => void; 
}

export interface EditInspectionCostProps {
inspectionCost: InspectionCost; 
onClose: () => void;  
onUpdate: (updatedInspectionCost: InspectionCost) => void; 
}

export interface DeleteInspectionCostProps {
inspectionCost: InspectionCost;
onCancel: () => void;
onDelete: () => void;
}

export interface AddInspectionCostProps {
inspectionCost: InspectionCost; 
onClose: () => void;  
onAdd: (addInspectionCost: InspectionCost) => void; 
}

export interface HeaderSectionPropsInspectionCost {
onAddInspectionCost: (inspectionCost: InspectionCost) => void;
onSearch: (query: string) => void;
}


export type InspectionCostFormMode = 'add' | 'edit';

export interface InspectionCostFormProps {
inspectionCost?: InspectionCost; // این پراپ اختیاری است، چون در حالت افزودن نیازی به مقدار اولیه نیست.
onClose: () => void; // تابع بستن فرم
onSave: (inspectionCost: InspectionCost) => void; // تابع ذخیره که برند جدید یا ویرایش‌شده را می‌گیرد
mode: InspectionCostFormMode; // مشخص می‌کند که فرم در حالت افزودن یا ویرایش است
}
