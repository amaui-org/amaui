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
      <path d="M11.225 19.65q-.15 0-.25-.1t-.1-.25v-5.4l.025-.2 1.325-3.75q.05-.075.1-.113.05-.037.2-.037h7.1q.125 0 .2.037.075.038.1.113l1.325 3.75q.025.05.025.2v5.4q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.4h-9v1.4q0 .15-.1.25t-.25.1Zm.65-6.55h8.4l-.9-2.6h-6.6Zm1.3 3.15q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm5.8 0q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Zm-13.75 2.725q0-.1.05-.213.05-.112.1-.162l1.25-1.25q-1.625 0-2.763-.687Q2.725 15.975 2.725 15V6.35q0-.825 1.5-1.263 1.5-.437 4.35-.437 2.85 0 4.35.437 1.5.438 1.5 1.263V7.8h-.7V6.35h-10.3v7.3h5.45v5.7H5.6q-.15 0-.262-.112-.113-.113-.113-.263Zm-.15-3.125q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25Z"/>
    </Icon>
  );
});

IconMaterialCommuteW100Filled.displayName = 'AmauiIconMaterialCommuteW100Filled';

export default IconMaterialCommuteW100Filled;
