import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFingerprintOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FingerprintOff'

      short_name='FingerprintOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M833-41 435-440q-19 11-29 28.5T396-374q0 92 58 164t166 95l-9 39q-120-26-187.5-109T356-374q0-28 13-52.5t37-41.5l-42-42q-34 26-52 61t-18 75q0 75 26.5 134.5T418-109l-27 29q-79-76-108-142t-29-152q0-48 22-91.5t60-73.5l-44-43q-58 54-80 99t-22 109q0 36 7 75t27 89l-37 13q-20-55-28-96.5t-8-80.5q0-73 25.5-127.5T264-611l-41-41q-20 17-38 37t-39 52l-34-23q23-33 42.5-54.5T195-680L42-834l42-42L876-84l-43 43ZM668-354q0-88-51-137.5T496-549l-40-40q6-1 12.5-1H481q93 2 160 66t67 170h-40ZM481-879q76 0 137.5 18.5T741-811l-16 37q-57-29-113-47t-131-18q-58 0-113.5 13T261-784l-30-31q57-32 120.5-48T481-879Zm0 98q114 0 205.5 47.5T850-588l-32 24q-64-91-148-134t-189-43q-39 0-76.5 6T332-713l-30-32q42-19 86.5-27.5T481-781Zm0 94q132 0 230.5 90T810-374q0 29-13 52.5T763-282l-28-28q16-11 25.5-27.5T770-374q0-116-89-194.5T482-647q-20 0-38.5 2t-36.5 7l-32-32q25-8 51.5-12.5T481-687Zm193 525q-97 0-159-68.5T458-393h40q-4 78 46.5 134T674-203q15 0 30.5-2.5T735-211l6 38q-17 4-33.5 7.5T674-162Z"/>
    </Icon>
  );
});

IconMaterialFingerprintOff.displayName = 'AmauiIconMaterialFingerprintOff';

export default IconMaterialFingerprintOff;
