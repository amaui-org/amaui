import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignLanguageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageW100Filled'

      short_name='SignLanguage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.925 21.475v-1.1H10.8v-1.2H4.65v-1.1h6.15v-1.2h-7v-1.1h7v-1.2H5.075v-1.1H12.6l-1.525-2.95L12.1 9.95l5.35 5.125v6.4Zm4.25-12.725-2.3-2.375.8-.775 2.5 2.6Zm-1.15 2.125-1.925-2 .775-.75 1.2 1.25-.65.35.35.675ZM18.8 13.6l-6.4-6.1-.175.1L8.95 4.175l.775-.775 4.85 5.05.875-.825L11.475 3.5l.8-.775 5.2 5.45.95-2.8h1.25v7.4Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageW100Filled.displayName = 'AmauiIconMaterialSignLanguageW100Filled';

export default IconMaterialSignLanguageW100Filled;
