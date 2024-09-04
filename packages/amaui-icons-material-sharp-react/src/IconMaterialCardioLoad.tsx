import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardioLoad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardioLoad'

      short_name='CardioLoad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 352-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T79-621q0-94 63-156.5T299-840q52 0 99 22t82 62q35-40 82-62t99-22q94 0 157 62.5T881-621q0 46-15.5 88t-49 87q-33.5 45-85 96T608-234L480-120ZM171-560h618q6-16 9-31t3-30q0-60-41.5-99.5T661-760q-47 0-86.5 27.5T504-660h-48q-31-45-70.5-72.5T299-760q-57 0-98.5 39.5T159-621q0 15 3 30t9 31Zm102 140h414q16-17 29-31.5t24-28.5H220q11 14 24 28.5t29 31.5Zm207 192q36-32 67.5-59.5T605-340H355q26 25 57.5 52.5T480-228Zm0-332Z"/>
    </Icon>
  );
});

IconMaterialCardioLoad.displayName = 'AmauiIconMaterialCardioLoad';

export default IconMaterialCardioLoad;
