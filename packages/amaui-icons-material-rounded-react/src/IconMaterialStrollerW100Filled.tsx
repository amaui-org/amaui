import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrollerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerW100Filled'

      short_name='Stroller'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.75 5.575q.675-.325 1.4-.475.725-.15 1.525-.15.825 0 1.6.15.775.15 1.65.475l-3.5 4.1-2.85-2.85q-.125-.125-.2-.288-.075-.162-.075-.312 0-.2.113-.375.112-.175.337-.275Zm6.6 14.275q-.525 0-.887-.362-.363-.363-.363-.888t.363-.888q.362-.362.887-.362t.888.362q.362.363.362.888t-.362.888q-.363.362-.888.362Zm-7.1 0q-.5 0-.875-.362Q6 19.125 6 18.6t.375-.888q.375-.362.875-.362.55 0 .9.362.35.363.35.888t-.35.888q-.35.362-.9.362Zm.175-3.5q-.225 0-.312-.2-.088-.2.062-.375L15.6 5.9q.425-.5.888-.725.462-.225 1.037-.225.725 0 1.213.488.487.487.487 1.212 0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25q0-.425-.287-.713-.288-.287-.713-.287-.4 0-.725.162-.325.163-.6.463L14.6 8.15v6.7q0 .625-.437 1.063-.438.437-1.063.437Z"/>
    </Icon>
  );
});

IconMaterialStrollerW100Filled.displayName = 'AmauiIconMaterialStrollerW100Filled';

export default IconMaterialStrollerW100Filled;
