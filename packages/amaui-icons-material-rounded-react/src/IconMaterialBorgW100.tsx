import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorgW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorgW100'

      short_name='Borg'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.6-132q-7.6 0-14.5-2.18-6.89-2.18-13.1-5.82L200-287q-14-8-21-20.86-7-12.85-7-28.14v-288q0-15.29 7-28.14Q186-665 200-673l252-147q6.3-3.64 13.3-5.82 7-2.18 14.7-2.18 7.45 0 14.23 2 6.77 2 13.77 6l252 147q13.3 7.7 20.65 20.65Q788-639.4 788-624v288q0 15.4-7.35 28.35Q773.3-294.7 760-287L508-140q-7 4-13.9 6-6.91 2-14.5 2ZM200-466v128q0 8 4 15t12 12l250 147v-190h-81q-12.75 0-21.37-8.63Q355-371.25 355-384v-82H200Zm0-28h155v-82q0-12.75 8.63-21.38Q372.25-606 385-606h81v-190L216-649q-8 5-12 12t-4 15v128Zm183 112h193v-195H383v195Zm377-84H604v82q0 12.75-8.62 21.37Q586.75-354 574-354h-80v190l250-147q8-5 12-12t4-15v-128Zm0-28v-128q0-8-4-15t-12-12L494-796v190h80q12.75 0 21.38 8.62Q604-588.75 604-576v82h156Z"/>
    </Icon>
  );
});

IconMaterialBorgW100.displayName = 'AmauiIconMaterialBorgW100';

export default IconMaterialBorgW100;
