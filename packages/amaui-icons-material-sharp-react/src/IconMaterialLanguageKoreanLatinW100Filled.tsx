import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanguageKoreanLatinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanguageKoreanLatinW100Filled'

      short_name='LanguageKoreanLatin'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M216 610q30 0 52.5-13.5T291 556q0-27-22.5-41T216 501q-30 0-52 14t-22 41q0 27 22 40.5t52 13.5ZM101 444v-28h100v-64h28v64h101v28H101Zm115 194q-42 0-72-21.5T114 556q0-39 30-61t72-22q42 0 72.5 22t30.5 61q0 39-30.5 60.5T216 638Zm-41 143V668h28v85h224v28H175Zm225-104V378h27v132h81v28h-80v139h-28Zm273 87q33 0 67.5-18t64.5-50V554q-29 5-53 11.5T702 580q-54 18-80 45.5T596 688q0 35 21 55.5t56 20.5Zm0 26q-47 0-76-28.5T568 687q0-44 32-76t96-54q17-6 44-12t65-14v-13q0-59-20.5-89.5T714 398q-28 0-55.5 9.5T604 436l-13-23q30-20 61-30.5t62-10.5q61 0 90 38.5T833 518v263h-24l-4-54q-31 30-66 46.5T673 790Z"/>
    </Icon>
  );
});

IconMaterialLanguageKoreanLatinW100Filled.displayName = 'AmauiIconMaterialLanguageKoreanLatinW100Filled';

export default IconMaterialLanguageKoreanLatinW100Filled;
