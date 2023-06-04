import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchWordW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchWordW100Filled'

      short_name='MatchWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 805V683h28v94h720v-94h28v122H92Zm306-110v-42h-4q-14 26-35.5 38.5T308 704q-41 0-65.5-22.5T218 621q0-42 29-68t76-26q20 0 40 4.5t35 12.5v-24q0-42-19-63t-57-21q-21 0-39 6.5T246 463l-19-19q22-18 44-26t50-8q54 0 79.5 28.5T426 524v171h-28Zm-70-142q-37 0-59 18t-22 49q0 27 16.5 42.5T307 678q40 0 65.5-30.5T398 570q-13-8-32-12.5t-38-4.5Zm190 143V295h28v140l-3 40h2q15-23 37.5-34.5T633 429q49 0 79 37t30 103q0 64-29.5 100T632 705q-29 0-52-12t-35-34h-2v37h-25Zm113-238q-38 0-63 31.5T543 569q0 48 25 79t63 31q38 0 59.5-29.5T712 569q0-51-21.5-81T631 458Z"/>
    </Icon>
  );
});

IconMaterialMatchWordW100Filled.displayName = 'AmauiIconMaterialMatchWordW100Filled';

export default IconMaterialMatchWordW100Filled;
