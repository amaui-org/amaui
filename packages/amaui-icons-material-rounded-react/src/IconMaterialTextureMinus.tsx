import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextureMinus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureMinus'

      short_name='TextureMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M176-120q-19-4-35.5-20.5T120-176l664-664q21 5 36 20.5t21 35.5L176-120Zm196 0 108-108v108H372Zm228-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h240q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H600ZM120-372v-112l356-356h112L120-372Zm492 12 228-228v112L724-360H612ZM120-680v-80q0-33 23.5-56.5T200-840h80L120-680Z"/>
    </Icon>
  );
});

IconMaterialTextureMinus.displayName = 'AmauiIconMaterialTextureMinus';

export default IconMaterialTextureMinus;
