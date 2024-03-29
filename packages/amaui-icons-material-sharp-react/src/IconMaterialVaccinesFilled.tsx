import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVaccinesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VaccinesFilled'

      short_name='Vaccines'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22.5 6 21v-4H3V7.5H2v-2h4V4H4.5V2h5v2H8v1.5h4v2h-1V17H8ZM5 15h4v-1.5H6.5V12H9v-1.5H6.5V9H9V7.5H5Zm8 7v-8.5q0-.725.25-1.2t.525-.825q.275-.35.5-.563.225-.212.225-.412V10h-1V8h7v2h-1v.5q0 .2.25.45t.55.6q.275.35.488.825Q21 12.85 21 13.5V22Zm2-8h4v-.5q0-.375-.225-.65t-.5-.6q-.275-.325-.525-.725-.25-.4-.25-1.025V10h-1v.5q0 .6-.237 1-.238.4-.513.725-.275.325-.512.612-.238.288-.238.663Zm0 6h4v-1.5h-4Z"/>
    </Icon>
  );
});

IconMaterialVaccinesFilled.displayName = 'AmauiIconMaterialVaccinesFilled';

export default IconMaterialVaccinesFilled;
