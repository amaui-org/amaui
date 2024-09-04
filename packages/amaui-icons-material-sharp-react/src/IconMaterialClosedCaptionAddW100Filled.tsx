import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionAddW100Filled'

      short_name='ClosedCaptionAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M516-376h136q8-6 15.5-11t16.5-10v-31h-28v24H544v-152h112v26h28v-54H516v208Zm-240 0h168v-52h-28v24H304v-152h112v26h28v-54H276v208Zm-44 164q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h496q26 0 43 17t17 43v269q-41-5-81.5 11T637-363q-29 29-45 69.5T581-212H232Zm528 80v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionAddW100Filled.displayName = 'AmauiIconMaterialClosedCaptionAddW100Filled';

export default IconMaterialClosedCaptionAddW100Filled;
