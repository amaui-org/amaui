import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardioLoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardioLoadFilled'

      short_name='CardioLoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 352-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T79-621q0-94 63-156.5T299-840q52 0 99 22t82 62q35-40 82-62t99-22q94 0 157 62.5T881-621q0 46-15.5 88t-49 87q-33.5 45-85 96T608-234L480-120ZM273-420h414q16-17 29-31.5t24-28.5H220q11 14 24 28.5t29 31.5Zm207 192q36-32 67.5-59.5T605-340H355q26 25 57.5 52.5T480-228Z"/>
    </Icon>
  );
});

IconMaterialCardioLoadFilled.displayName = 'AmauiIconMaterialCardioLoadFilled';

export default IconMaterialCardioLoadFilled;
