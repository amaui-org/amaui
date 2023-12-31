import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageSpanishFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageSpanishFilled'

      short_name='LanguageSpanish'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-280v-120h80v40h120v-80H520v-240h280v120h-80v-40H600v80h200v240H520ZM160-680h280v80H240v80h160v80H240v80h200v80H160v-400Z"/>
    </Icon>
  );
});

IconMaterialLanguageSpanishFilled.displayName = 'AmauiIconMaterialLanguageSpanishFilled';

export default IconMaterialLanguageSpanishFilled;
