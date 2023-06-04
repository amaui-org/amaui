import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewW100'

      short_name='Preview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V7H5v11.2q0 .35.225.575Q5.45 19 5.8 19Zm6.2-3.3q-1.5 0-2.712-.75Q8.075 14.2 7.425 13q.65-1.2 1.863-1.95Q10.5 10.3 12 10.3q1.5 0 2.713.75 1.212.75 1.862 1.95-.65 1.2-1.862 1.95-1.213.75-2.713.75Zm0-.7q1.125 0 2.113-.525.987-.525 1.712-1.475-.725-.95-1.712-1.475Q13.125 11 12 11t-2.113.525Q8.9 12.05 8.175 13q.725.95 1.712 1.475Q10.875 15 12 15Zm0-1q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialPreviewW100.displayName = 'AmauiIconMaterialPreviewW100';

export default IconMaterialPreviewW100;
