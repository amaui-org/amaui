import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentW100Filled'

      short_name='SettingsInputComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22.35q-.15 0-.25-.1t-.1-.25v-3.65q-.875-.2-1.437-.825Q1.65 16.9 1.65 16v-2.65h4.7V16q0 .9-.562 1.525-.563.625-1.438.825v3.675q0 .125-.1.225t-.25.1Zm8 0q-.15 0-.25-.1t-.1-.25v-3.65q-.875-.2-1.437-.825Q9.65 16.9 9.65 16v-2.65h4.7V16q0 .9-.562 1.525-.563.625-1.438.825v3.675q0 .125-.1.225t-.25.1Zm8 0q-.15 0-.25-.1t-.1-.25v-3.65q-.875-.2-1.437-.825Q17.65 16.9 17.65 16v-2.65h4.7V16q0 .9-.562 1.525-.563.625-1.438.825v3.675q0 .125-.1.225t-.25.1Zm-18.35-9.7V7.4q0-.325.213-.538.212-.212.537-.212h1.25V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65H5.6q.325 0 .538.212.212.213.212.538v5.25Zm8 0V7.4q0-.325.213-.538.212-.212.537-.212h1.25V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h1.25q.325 0 .538.212.212.213.212.538v5.25Zm8 0V7.4q0-.325.213-.538.212-.212.537-.212h1.25V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h1.25q.325 0 .538.212.212.213.212.538v5.25Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentW100Filled.displayName = 'AmauiIconMaterialSettingsInputComponentW100Filled';

export default IconMaterialSettingsInputComponentW100Filled;
