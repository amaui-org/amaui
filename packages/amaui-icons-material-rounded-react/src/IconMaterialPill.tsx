import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPill = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pill'

      short_name='Pill'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M345 936q-94 0-159.5-65.5T120 711q0-45 17-86t49-73l270-270q32-32 73-49t86-17q94 0 159.5 65.5T840 441q0 45-17 86t-49 73L504 870q-32 32-73 49t-86 17Zm266-286 107-106q20-20 31-47t11-56q0-60-42.5-102.5T615 296q-29 0-56 11t-47 31L406 445l205 205ZM345 856q29 0 56-11t47-31l106-107-205-205-107 106q-20 20-31 47t-11 56q0 60 42.5 102.5T345 856Z"/>
    </Icon>
  );
});

IconMaterialPill.displayName = 'AmauiIconMaterialPill';

export default IconMaterialPill;
