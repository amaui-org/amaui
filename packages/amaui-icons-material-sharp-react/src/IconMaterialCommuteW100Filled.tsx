import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommuteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommuteW100Filled'

      short_name='Commute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.875 19.65V13.8l1.4-4h7.6l1.4 4v5.85h-.7V17.9h-9v1.75Zm1-6.55h8.4l-.9-2.6h-6.6Zm1.3 3.15q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm5.8 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-14.25 3.1v-.1l1.9-1.9q-1.625 0-2.763-.687Q2.725 15.975 2.725 15V6.35q0-.825 1.5-1.263 1.5-.437 4.35-.437 2.85 0 4.35.437 1.5.438 1.5 1.263V7.8h-.7V6.35h-10.3v7.3h5.45v5.7Zm.35-3.5q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialCommuteW100Filled.displayName = 'AmauiIconMaterialCommuteW100Filled';

export default IconMaterialCommuteW100Filled;
