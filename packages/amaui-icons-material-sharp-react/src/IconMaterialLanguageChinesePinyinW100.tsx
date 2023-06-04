import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageChinesePinyinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageChinesePinyinW100'

      short_name='LanguageChinesePinyin'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M327 597h76v-95h-76v95ZM103 781l-7-28h46q5 0 8.5-4.5t3.5-9.5V619l-54 20-5-26 59-21v-90h-47v-28h47v-93h28v93h34v28h-34v80l44-16v26l-44 17v135q0 15-10 26t-25 11h-44Zm124 10-16-23q37-25 60-62t27-81h-72v-28h73v-95h-57v-28h236v28h-47v95h63v28h-63v156h-28V625h-77q-4 51-30 94.5T227 791Zm188-311-22-10q11-17 21.5-33t18.5-34l24 8q-8 19-19.5 35.5T415 480Zm-102-9q-9-17-18-33.5T275 405l24-9q10 16 19.5 32.5T337 462l-24 9Zm360 293q33 0 67.5-18t64.5-50V554q-29 5-53 11.5T702 580q-54 18-80 45.5T596 688q0 35 21 55.5t56 20.5Zm0 26q-47 0-76-28.5T568 687q0-44 32-76t96-54q17-6 44-12t65-14v-13q0-59-20.5-89.5T714 398q-28 0-55.5 9.5T604 436l-13-23q30-20 61-30.5t62-10.5q61 0 90 38.5T833 518v263h-24l-4-54q-31 30-66 46.5T673 790Z"/>
    </Icon>
  );
});

IconMaterialLanguageChinesePinyinW100.displayName = 'AmauiIconMaterialLanguageChinesePinyinW100';

export default IconMaterialLanguageChinesePinyinW100;
