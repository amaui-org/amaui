import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPreviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PreviewW100Filled'

      short_name='Preview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.125 0 2.113-.525.987-.525 1.712-1.475-.725-.95-1.712-1.475Q13.125 11 12 11t-2.113.525Q8.9 12.05 8.175 13q.725.95 1.712 1.475Q10.875 15 12 15Zm0 .7q-1.5 0-2.712-.75Q8.075 14.2 7.425 13q.65-1.2 1.863-1.95Q10.5 10.3 12 10.3q1.5 0 2.713.75 1.212.75 1.862 1.95-.65 1.2-1.862 1.95-1.213.75-2.713.75Zm0-1.7q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-7.7 5.7V4.3h15.4v15.4ZM5 19h14V7H5Z"/>
    </Icon>
  );
});

IconMaterialPreviewW100Filled.displayName = 'AmauiIconMaterialPreviewW100Filled';

export default IconMaterialPreviewW100Filled;
