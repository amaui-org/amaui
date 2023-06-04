import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageInternationalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageInternationalW100Filled'

      short_name='LanguageInternational'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M106 710V442h28v268h-28Zm100 0V442h40l136 262-16 2V442h28v268h-40L218 448l16-2v264h-28Zm330 0V470h-80v-28h188v28h-80v240h-28Zm170 0V442h28v240h120v28H706Z"/>
    </Icon>
  );
});

IconMaterialLanguageInternationalW100Filled.displayName = 'AmauiIconMaterialLanguageInternationalW100Filled';

export default IconMaterialLanguageInternationalW100Filled;
