import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize3'

      short_name='EraserSize3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-200q-58 0-99-41t-41-99q0-27 10.5-53t30.5-46l280-280q20-20 46-30.5t53-10.5q58 0 99 41t41 99q0 27-10.5 53T719-521L439-241q-20 20-46 30.5T340-200Z"/>
    </Icon>
  );
});

IconMaterialEraserSize3.displayName = 'AmauiIconMaterialEraserSize3';

export default IconMaterialEraserSize3;
