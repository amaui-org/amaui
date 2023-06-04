import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.7 16.85-.7-.7V5.8q0-.3-.25-.55Q18.5 5 18.2 5H7.85l-.7-.7H18.2q.65 0 1.075.425.425.425.425 1.075Zm.75 4.6L18.7 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.3L2.55 3.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125Zm-9.25-5.4 1.725-2.125L5 6v12.2q0 .3.25.55.25.25.55.25H18l-2.65-2.65h-6.6q-.25 0-.35-.225-.1-.225.05-.425l.85-1.1q.125-.15.313-.162.187-.013.312.137ZM12 12Zm-.5.5Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100.displayName = 'AmauiIconMaterialHideImageW100';

export default IconMaterialHideImageW100;
