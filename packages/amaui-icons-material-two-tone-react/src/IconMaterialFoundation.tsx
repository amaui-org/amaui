import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoundation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Foundation'

      short_name='Foundation'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M7,15v-4.81l4-3.6V15H7z M13,15V6.59l4,3.6V15H13z" opacity=".3"/><path d="M19,12h3L12,3L2,12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2V12z M7,15v-4.81l4-3.6V15H7z M13,15V6.59l4,3.6V15H13z"/>
    </Icon>
  );
});

IconMaterialFoundation.displayName = 'AmauiIconMaterialFoundation';

export default IconMaterialFoundation;
