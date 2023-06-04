import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownDocumentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocumentW100'

      short_name='UnknownDocument'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 256v259-3 384-640 148-148Zm106 374h126l10-14 10-14H306v28Zm0 160h91q-1-6.667-1-13.333V762h-90v28ZM172 924V228h374l162 162v131q-8-2-14.5-3.5T680 515V404H532V256H200v640h236q5 8 10.043 15.018Q451.087 918.035 457 924H172Zm472-312q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Zm0 260q8.462 0 14.231-5.769T664 852q0-8.462-5.769-14.231T644 832q-8.462 0-14.231 5.769T624 852q0 8.462 5.769 14.231T644 872Zm-14-70h28v-6q0-12 6-19t14-15q14-12 22-25t8-31.367Q708 679 690.253 661.5 672.505 644 644.484 644 623 644 604.5 657.5T578 692l26 10q5-12 15.5-21t24.5-9q16.875 0 26.438 8.415Q680 688.829 680 705.659 680 718 673 726q-7 8-15 16-6 6-11.5 13T636 768.286q-3 4.714-4.5 11.214t-1.5 12.318V802Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocumentW100.displayName = 'AmauiIconMaterialUnknownDocumentW100';

export default IconMaterialUnknownDocumentW100;
