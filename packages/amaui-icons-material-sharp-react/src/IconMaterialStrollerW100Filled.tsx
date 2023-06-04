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
      <path d="M14.35 19.85q-.525 0-.887-.362-.363-.363-.363-.888t.363-.888q.362-.362.887-.362t.888.362q.362.363.362.888t-.362.888q-.363.362-.888.362Zm-7.1 0q-.5 0-.875-.362Q6 19.125 6 18.6t.375-.888q.375-.362.875-.362.55 0 .9.362.35.363.35.888t-.35.888q-.35.362-.9.362Zm-.575-3.5L15.6 5.9q.425-.5.888-.725.462-.225 1.037-.225.7 0 1.2.5t.5 1.2V7h-.7v-.35q0-.425-.287-.713-.288-.287-.713-.287-.4 0-.725.162-.325.163-.6.463L14.6 8.15v8.2Zm3.75-6.675-3.6-3.6Q7.7 5.5 8.65 5.225t2.025-.275q.8 0 1.588.15.787.15 1.662.475Z"/>
    </Icon>
  );
});

IconMaterialStrollerW100Filled.displayName = 'AmauiIconMaterialStrollerW100Filled';

export default IconMaterialStrollerW100Filled;
