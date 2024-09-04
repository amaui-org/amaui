import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer5W100'

      short_name='Timer5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M396-302h168v-152H424v-96h140v-28H396v152h140v96H396v28Zm-16-564v-28h200v28H380Zm100 734q-63.53 0-119.77-24Q304-180 262-222q-42-42-66-98.23-24-56.24-24-119.77 0-63.53 24-119.77Q220-616 262-658q42-42 98.23-66 56.24-24 119.77-24 57 0 110.5 21t97.5 59l40-40 20 20-40 40q38 44 59 97.5T788-440q0 63.53-24 119.77Q740-264 698-222q-42 42-98.23 66-56.24 24-119.77 24Zm0-28q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/>
    </Icon>
  );
});

IconMaterialTimer5W100.displayName = 'AmauiIconMaterialTimer5W100';

export default IconMaterialTimer5W100;
