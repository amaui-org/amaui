import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVr180Create2dW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vr180Create2dW100Filled'

      short_name='Vr180Create2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-132v-408h408v408H420Zm100-78h240l-72-94-68 90-48-66-52 70Zm-200-94q-85-26-136.5-96.5T132-560q0-112 78-190t190-78q89 0 159.5 51.5T656-640H320v336Z"/>
    </Icon>
  );
});

IconMaterialVr180Create2dW100Filled.displayName = 'AmauiIconMaterialVr180Create2dW100Filled';

export default IconMaterialVr180Create2dW100Filled;
