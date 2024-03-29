import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxEditFilled'

      short_name='BoxEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M838-271 699-132q-6 6-13.5 9t-15.5 3h-70q-17 0-28.5-11.5T560-160v-70q0-8 3-15.5t9-13.5l139-139 127 127ZM200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v143q-20-5-40.5-3T760-549q-10 5-18.5 10T725-526l-85 86v-200H320v255q0 23 19 34.5t39 1.5l102-51 80 40-57 56q-11 11-17 26t-6 31v87q0 17-11.5 28.5T440-120H200Zm680-193L753-440l29-29q11-11 28-11t28 11l71 71q11 11 11 28t-11 28l-29 29ZM216-720h528l-34-40H250l-34 40Z"/>
    </Icon>
  );
});

IconMaterialBoxEditFilled.displayName = 'AmauiIconMaterialBoxEditFilled';

export default IconMaterialBoxEditFilled;
