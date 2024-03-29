import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHematologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HematologyFilled'

      short_name='Hematology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M520 1016q-73 0-116.5-61T360 816q0-78 43.5-139T520 616q73 0 116.5 61T680 816q0 78-43.5 139T520 1016ZM240 576q0 94-11 185.5T192 944q-5 17-20 27t-32 5q-17-5-23-22.5t-1-35.5q23-84 33.5-169T160 576q0-88-10.5-173T116 234q-5-18 1-35.5t23-22.5q17-5 32 5t20 27q26 91 37 182.5T240 576Zm560 0q0 88 10.5 173T844 918q5 18-1 35.5T820 976q-17 5-32-5t-20-27q-26-91-37-182.5T720 576q0-94 11-185.5T768 208q5-17 20-27t32-5q17 5 23 22.5t1 35.5q-23 84-33.5 169T800 576ZM489 888q9 8 21 8t21-9q14-14 21.5-32.5T560 816q0-20-7-38.5T532 745q-8-9-20.5-9t-21.5 8q-9 8-9.5 21t7.5 22l6 8.5q6 8.5 6 20.5t-6 20.5l-6 8.5q-9 9-8.5 22t9.5 21Zm-49-352q-73 0-116.5-61T280 336q0-78 43.5-139T440 136q73 0 116.5 61T600 336q0 78-43.5 139T440 536Zm30-128q9-8 9.5-21t-7.5-22q-5-6-8.5-13.5T460 336q0-8 3.5-15.5T472 307q8-9 8-21.5t-9-21.5q-9-8-21-8t-21 9q-14 14-21.5 32.5T400 336q0 20 7 38.5t21 32.5q9 9 21 9t21-8Z"/>
    </Icon>
  );
});

IconMaterialHematologyFilled.displayName = 'AmauiIconMaterialHematologyFilled';

export default IconMaterialHematologyFilled;
