import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastForEducationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastForEducationW100'

      short_name='CastForEducation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.7 11.55 3.4-1.95-3.4-1.95-3.4 1.95Zm0 2.8 2.55-1.45v-1.65l-2.55 1.5-2.55-1.5v1.65Zm-.4 4.35V18H20V6H4v1.7h-.7V5.3h17.4v13.4Zm-11 0h1.6q0-.65-.475-1.125T3.3 17.1Zm4.6 0h.7q0-2.2-1.55-3.75Q5.5 13.4 3.3 13.4v.7q1.925.05 3.262 1.375Q7.9 16.8 7.9 18.7Zm-4.6-9v.7q1.725 0 3.238.65 1.512.65 2.637 1.775t1.775 2.638q.65 1.512.65 3.237h.7q0-1.875-.712-3.512-.713-1.638-1.925-2.851-1.213-1.212-2.85-1.925Q5.175 9.7 3.3 9.7Zm8.35 2.65Z"/>
    </Icon>
  );
});

IconMaterialCastForEducationW100.displayName = 'AmauiIconMaterialCastForEducationW100';

export default IconMaterialCastForEducationW100;
