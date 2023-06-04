import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnknownDocumentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownDocumentW100Filled'

      short_name='UnknownDocument'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M644 872q8.462 0 14.231-5.769T664 852q0-8.462-5.769-14.231T644 832q-8.462 0-14.231 5.769T624 852q0 8.462 5.769 14.231T644 872Zm-14-70h28v-6q0-12 6-19t14-15q14-12 22-25t8-31.367Q708 679 690.253 661.5 672.505 644 644.484 644 623 644 604.5 657.5T578 692l26 10q5-12 15.5-21t24.5-9q16.875 0 26.438 8.415Q680 688.829 680 705.659 680 718 673 726q-7 8-15 16-6 6-11.5 13T636 768.286q-3 4.714-4.5 11.214t-1.5 12.318V802Zm14 106q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM532 404h148L532 256l148 148-148-148v148ZM172 924V228h374l162 162v130q-16-5-31.5-6.5T644 512q-58 0-107.5 24T453 602H306v28h127q-17 29-27 62.5T396 762h-90v28h91.777Q403 827 418 861t40 63H172Z"/>
    </Icon>
  );
});

IconMaterialUnknownDocumentW100Filled.displayName = 'AmauiIconMaterialUnknownDocumentW100Filled';

export default IconMaterialUnknownDocumentW100Filled;
