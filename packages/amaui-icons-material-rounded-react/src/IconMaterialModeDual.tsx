import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeDual = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeDual'

      short_name='ModeDual'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-720v113l-82-82q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T172-689l-47 47q-12 12-28 11.5T69-643q-12-12-12-28.5T69-700l46-46q27-27 61-40.5t69-13.5q35 0 68.5 13.5T374-746l26 26Zm0 200v113l-82-82q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T172-489l-47 47q-11 11-27.5 11.5T69-442q-12-11-12.5-28T68-499l47-47q27-27 61-40.5t69-13.5q35 0 68.5 13.5T374-546l26 26Zm0 200v113l-83-82q-15-15-34-22.5t-39-7.5q-20 0-39 7.5T171-289l-47 47q-11 11-27.5 11.5T68-242q-11-11-11-28t11-28l47-48q27-27 61-40.5t69-13.5q35 0 68.5 13.5T374-346l26 26Zm80 200v-720q0-17 11.5-28.5T520-880q17 0 28.5 11.5T560-840v126l102-101q11-11 27.5-11t28.5 12q11 11 11 28t-11 28L560-600v80h80l158-158q11-11 27.5-11.5T854-678q11 11 11 28t-11 28L754-520h126q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440H754l101 102q11 11 11 27.5T854-282q-11 11-28 11t-28-11L640-440h-80v80l158 158q11 11 11.5 27.5T718-146q-11 11-28 11t-28-11L560-246v126q0 17-11.5 28.5T520-80q-17 0-28.5-11.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialModeDual.displayName = 'AmauiIconMaterialModeDual';

export default IconMaterialModeDual;
