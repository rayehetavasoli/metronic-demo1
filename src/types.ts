
//Users
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    date: Date;
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
//Brands
  export interface Brand {
    id: number;
    brandName: string;
    founded: string;
    country: string;
    industry: string;
  }
  
  export interface BrandTableProps {
  data: Brand[]; 
  onEdit: (brand: Brand) => void; 
  onDelete: (brand: Brand) => void; 
}

export interface EditBrandProps {
  brand: Brand; 
  onClose: () => void;  
  onUpdate: (updatedBrand: Brand) => void; 
}

export interface DeleteBrandProps {
  brand: Brand;
  onCancel: () => void;
  onDelete: () => void;
}

export interface AddBrandProps {
  brand: Brand; 
  onClose: () => void;  
  onAdd: (addBrand: Brand) => void; 
}