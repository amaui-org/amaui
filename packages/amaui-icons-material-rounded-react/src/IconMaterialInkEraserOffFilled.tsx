import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInkEraserOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InkEraserOffFilled'

      short_name='InkEraserOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-55 602-244l-82 84H190l-85-85q-23-23-23.5-57t22.5-58l188-194L55-791l57-57 736 736-57 57Zm-76-304L404-670l140-146q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L715-359Z"/>
    </Icon>
  );
});

IconMaterialInkEraserOffFilled.displayName = 'AmauiIconMaterialInkEraserOffFilled';

export default IconMaterialInkEraserOffFilled;
