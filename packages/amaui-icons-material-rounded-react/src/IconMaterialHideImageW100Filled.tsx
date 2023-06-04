import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100Filled'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.7 16.85 7.15 4.3H18.2q.65 0 1.075.425.425.425.425 1.075Zm.75 4.6L18.7 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.3L2.55 3.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125Zm-11.7-5.1h6.6l-2.425-2.425L11.2 16.05l-1.275-1.475q-.125-.15-.312-.137-.188.012-.313.162l-.85 1.1q-.15.2-.05.425.1.225.35.225Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100Filled.displayName = 'AmauiIconMaterialHideImageW100Filled';

export default IconMaterialHideImageW100Filled;
