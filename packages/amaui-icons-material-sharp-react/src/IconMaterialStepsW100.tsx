import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepsW100'

      short_name='Steps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M698 896h84l18-63-195-195-71-214-144 34-30-29V281l-28-14-175 235h129l412 394Zm-163 0h122L275 530H134l401 366Zm-10 28L96 535l227-303 65 31v169l164-42 77 232 199 199-30 103H525Z"/>
    </Icon>
  );
});

IconMaterialStepsW100.displayName = 'AmauiIconMaterialStepsW100';

export default IconMaterialStepsW100;
