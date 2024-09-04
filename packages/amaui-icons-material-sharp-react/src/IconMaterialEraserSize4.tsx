import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEraserSize4 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EraserSize4'

      short_name='EraserSize4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-160q-98 0-167-69t-69-167q0-46 17-89.5t52-78.5l167-167q35-35 78.5-52t89.5-17q98 0 167 69t69 167q0 46-17 89.5T731-396L564-229q-35 35-78.5 52T396-160Z"/>
    </Icon>
  );
});

IconMaterialEraserSize4.displayName = 'AmauiIconMaterialEraserSize4';

export default IconMaterialEraserSize4;
