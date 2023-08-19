export interface ReactComponentChild {
  children: React.ReactNode;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterProps extends LoginProps {
  fullName: string;
}

export interface CarCardProps {
  _id: string;
  name: string;
  typeCar: string;
  gasoline: number;
  steering: string;
  capacity: number;
  price: number;
  style: string;
  imageLink: string;
  isLiked: boolean;
}
