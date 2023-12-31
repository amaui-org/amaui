import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagQuestionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagQuestionW100Filled'

      short_name='CarryOnBagQuestion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-108q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-270-64v-456h146v-172h-60v-28h88v365q-59 30-95.5 84.5T456-258q0 22 3.5 44t12.5 42h-58Zm-122 0v-456h94v456h-94Zm392 28q8.462 0 14.231-5.769T704-164q0-8.462-5.769-14.231T684-184q-8.462 0-14.231 5.769T664-164q0 8.462 5.769 14.231T684-144Zm-14-70h28v-6q0-12 6-19t14-15q14-12 22-25t8-31.367Q748-337 730.253-354.5 712.505-372 684.484-372 663-372 644.5-358.5T618-324l26 10q5-12 15.5-21t24.5-9q16.875 0 26.438 8.415Q720-327.171 720-310.341 720-298 713-290q-7 8-15 16-6 6-11.5 13T676-247.714q-3 4.714-4.5 11.214t-1.5 12.318V-214Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagQuestionW100Filled.displayName = 'AmauiIconMaterialCarryOnBagQuestionW100Filled';

export default IconMaterialCarryOnBagQuestionW100Filled;
