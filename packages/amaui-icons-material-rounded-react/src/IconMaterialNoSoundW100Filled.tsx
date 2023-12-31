import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSoundW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSoundW100Filled'

      short_name='NoSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m688-460-94 94q-4 4-9.5 4.5T574-366q-5-5-5-10t5-10l94-94-94-94q-4-4-4.5-9.5T574-594q5-5 10-5t10 5l94 94 94-94q4-4 9.5-4.5T802-594q5 5 5 10t-5 10l-94 94 94 94q4 4 4.5 9.5T802-366q-5 5-10 5t-10-5l-94-94Zm-370 48H218q-13 0-21.5-8.5T188-442v-76q0-13 8.5-21.5T218-548h100l100-100q7-7 16.5-3.5T444-638v316q0 10-9.5 13.5T418-312L318-412Z"/>
    </Icon>
  );
});

IconMaterialNoSoundW100Filled.displayName = 'AmauiIconMaterialNoSoundW100Filled';

export default IconMaterialNoSoundW100Filled;
