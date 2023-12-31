import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLassoSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LassoSelectW100'

      short_name='LassoSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m161-514-28-2q5-40 18-78t34-72l24 14q-20 31-31.5 66T161-514Zm72 280q-28-28-48-62t-34-72l26-8q12 35 31 65.5t45 56.5l-20 20Zm74-516-14-24q35-21 72.5-34t77.5-18l2 28q-37 5-72 16.5T307-750Zm172 618q-30 0-59.5-5.5T361-154l8-26q27 9 54 14.5t56 5.5v28Zm226-574q-26-26-56.5-45T583-782l10-26q37 14 70.5 34t61.5 48l-20 20Zm-98 542v-188h188v28H655l138 138-20 20-138-138v140h-28Zm192-316q0-29-4.5-56.5T779-590l26-8q11 28 16.5 58t5.5 60h-28Z"/>
    </Icon>
  );
});

IconMaterialLassoSelectW100.displayName = 'AmauiIconMaterialLassoSelectW100';

export default IconMaterialLassoSelectW100;
