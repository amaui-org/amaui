import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrollerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerW100'

      short_name='Stroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 19.85q-.525 0-.887-.362-.363-.363-.363-.888t.363-.888q.362-.362.887-.362t.888.362q.362.363.362.888t-.362.888q-.363.362-.888.362Zm-7.1 0q-.5 0-.875-.362Q6 19.125 6 18.6t.375-.888q.375-.362.875-.362.55 0 .9.362.35.363.35.888t-.35.888q-.35.362-.9.362Zm.975-4.2H13.9V8.975Zm-1.55.7L15.6 5.9q.425-.5.888-.725.462-.225 1.037-.225.725 0 1.213.488.487.487.487 1.212V7h-.7v-.35q0-.425-.287-.713-.288-.287-.713-.287-.4 0-.725.162-.325.163-.6.463L14.6 8.15v8.2ZM11 12.4Zm-.625-3.75 2.3-2.7q-.45-.125-.95-.213-.5-.087-1.05-.087-.75 0-1.413.137-.662.138-1.287.438Zm.05 1.025-3.6-3.6Q7.7 5.5 8.65 5.225t2.025-.275q.825 0 1.6.15.775.15 1.65.475Zm-.05-1.025Z"/>
    </Icon>
  );
});

IconMaterialStrollerW100.displayName = 'AmauiIconMaterialStrollerW100';

export default IconMaterialStrollerW100;
