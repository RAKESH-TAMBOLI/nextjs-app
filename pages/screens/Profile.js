import Head from 'next/head'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import appConstants from '../../helpers/appContants'
import socialLink from '../../helpers/socialLinks'
import identityIcons from '../../helpers/identityIcons'
// import ProfileC from '../../components/ProfileC'

const Profile = ({ user }) => {
    // const [user, setUser] = useState({})
    // const [user, setUser] = useState(user)
    console.log(user)
    // console.log(user?.identities)
    // const idtity = user?.identities['appleMusic']
    // const validId = idtity?.filter(item => console.log(item))
    // console.log(idtity)
    // console.log(appConstants)

    useEffect(() => {
        const ButtonClick = () => {
            // axios2 request
            // const { data } = await axios.get(
            //     'https://oth-api-test.onetaphello.com/users/get-user-shared-profile/6197f90387cc2c3e6ff2575a'
            // )
            setUser([...user, ...user])
        }
    }, [])

    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const { data } = await axios.get(
    //             'https://oth-api-test.onetaphello.com/users/get-user-shared-profile/6197f90387cc2c3e6ff2575a'
    //         )
    //         // console.log(`resonse ${data}`)
    //         setUser(data)
    //         // setTimeout(() => {
    //         //     setUser(data)
    //         // }, 3000)
    //     }
    //     fetchdata()
    // }, [])

    return (
        <>
            {/* <div> */}
            <Head>
                <meta
                    name='description'
                    // position
                    content={user?.contacts?.bio}
                />
                <meta property='og:title' content={user?.contacts?.position} />
                {/* <meta
                        property='og:type'
                        content='https://oth-api-test.onetaphello.com/users/get-user-shared-profile/6197f90387cc2c3e6ff2575a'
                    /> */}
                <meta
                    property='og:image'
                    itemProp='image'
                    content={user?.contacts?.avatarUrl}
                    // image user
                />
                {/* <meta property="og:image:width" content="300"> */}
                {/* <meta property="og:image:height" content="300"> */}
                <meta
                    property='og:url'
                    // content={`https://onetaphello.herokuapp.com/${user?.contacts?.first_name}/${user?._id}`}
                    content='https://onetaphello.herokuapp.com/screens/Profile'
                />
            </Head>
            <div className='mt-32 ml-96 w-5/12'>
                <section className=' relative z-30 my-auto h-full w-full rounded-t-2xl border pt-8 pb-8'>
                    {/* img taps viwes  */}
                    <div className='-mt-12 flex flex-col items-center justify-center'>
                        <img
                            // src='/image/onetaphello.png'
                            src={user?.contacts?.avatarUrl}
                            alt={user?.contacts?.first_name}
                            // className="w-28 rounded-full object-cover "
                            className='-mt-12 h-32 w-32 rounded-full object-cover'
                        />
                        <div className='flex w-full justify-around'>
                            {/* countContainerBx css  */}
                            <div className='items-center'>
                                {/* ccHeader css  */}
                                <label className='text-md font-bold text-blue-800'>
                                    {user?.tapsCount}
                                </label>
                                {/* ccvalue css  */}
                                <label className='text-md ml-1 font-bold text-gray-500'>
                                    {appConstants?.taps_lable}
                                </label>
                            </div>
                            <div>
                                <label className='text-md font-bold text-blue-800'>
                                    {' '}
                                    {user?.shareCount}{' '}
                                </label>
                                <label className='text-md ml-1 font-bold text-gray-500'>
                                    {appConstants?.views_label}
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* profile firstName lastName isVerified */}
                    <div className='relative mt-8 mr-4 ml-4 flex w-full flex-col pb-3 '>
                        <div className='flex flex-row items-center justify-center'>
                            <div className='flex items-center'>
                                <label className='mr-1 text-2xl font-bold opacity-95'>
                                    {user?.contacts?.first_name}
                                </label>
                                <label className='mr-1 text-2xl font-bold opacity-95'>
                                    {user?.contacts?.last_name}
                                </label>
                                {/* isVerified sign icon */}
                                {user?.isVerified ? (
                                    <img
                                        className='mt-2 ml-1 h-4 w-4 object-cover'
                                        src={'/image/correct-right.png'}
                                    />
                                ) : null}
                                {/* {} */}
                            </div>
                        </div>
                        {/* position  */}
                        <div className='mr-5 flex justify-center text-lg font-semibold text-blue-600'>
                            <label>{user?.contacts?.position}</label>
                        </div>
                        {/* icons mail call website  */}
                        <div className=' mt-4 mr-6 flex items-center justify-around '>
                            {/* mail  */}
                            {user?.contacts?.email ? (
                                <a href={'mailto:' + user?.contacts?.email}>
                                    <div className=' flex flex-col items-center '>
                                        <img src='/image/mail.png' alt='mail' />
                                        <p className='text-md font-medium tracking-wider '>
                                            {appConstants?.mail_lable}
                                        </p>
                                    </div>
                                </a>
                            ) : null}

                            {/* call  */}
                            {user?.contacts?.phone ? (
                                <a
                                //  href={'mailto:' + user?.contacts?.phone}
                                >
                                    <div className=' flex flex-col items-center '>
                                        <img src='/image/call.png' alt='call' />
                                        <p className='text-md font-medium tracking-wider '>
                                            {appConstants?.call_label}
                                        </p>
                                    </div>
                                </a>
                            ) : null}

                            {/* website  */}
                            {user?.contacts?.website ? (
                                <a
                                    href=''
                                    onClick={() =>
                                        window.open(
                                            'http://' + user?.contacts?.website
                                        )
                                    }>
                                    <div className=' flex flex-col items-center '>
                                        <img
                                            src='/image/world.png'
                                            alt='call'
                                        />
                                        <p className='text-md font-medium tracking-wider '>
                                            {appConstants?.website_label}
                                        </p>
                                    </div>
                                </a>
                            ) : null}
                        </div>

                        {/* Save Button  */}

                        <div className=' text-md mt-3 ml-44 w-40 cursor-pointer rounded-3xl bg-blue-800 py-2 px-7 text-center font-semibold text-white'>
                            {user?.contacts?.phone ? (
                                <a
                                // href={'data:text/vcard;charset=UTF-8,' + createVcard()}
                                // download="contact.vcf"
                                //  saveBUtton css
                                >
                                    {appConstants?.saveButton_label}
                                </a>
                            ) : null}
                        </div>

                        {/* Bio details */}
                        <div className=''>
                            <div className=''>
                                <h3 className=' text-lg font-semibold text-blue-500'>
                                    {appConstants?.about_label}
                                </h3>
                                {user?.contacts?.bio ? (
                                    <div className='flex flex-wrap w-5/6'>
                                        <p className=' text-sm text-gray-500'>
                                            {user?.contacts?.bio}
                                        </p>
                                    </div>
                                ) : null}
                            </div>
                            <div>
                                <h3 className=' text-lg font-semibold text-blue-500'>
                                    {appConstants?.company_label}
                                </h3>
                                {user?.contacts?.company ? (
                                    <p className='text-sm text-gray-500'>
                                        {user?.contacts?.company}
                                    </p>
                                ) : null}
                            </div>
                            <div>
                                <h3 className=' text-lg font-semibold text-blue-500'>
                                    {appConstants?.location_label}
                                </h3>
                                {user?.contacts?.location ? (
                                    <p className='text-sm text-gray-500'>
                                        {user?.contacts?.location}
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className='border ml-2 mr-2 mx-3 my-3'></div>
                    <div>
                        {/* scrollingBOx css  */}
                        <div className='grid grid-cols-4 gap-8 ml-14'>
                            {/* {Object.entries(user?.identities || {})
                                .filter(([_, value]) => Boolean(value))
                                .map(([type, value]) =>
                                    user?.hideIdentities[type] ? null : (
                                        <div>
                                            <a
                                                href={
                                                    SOCIAL_LINKS[type] +
                                                    '/' +
                                                    value
                                                }
                                                target="_blank"
                                            >
                                                <img
                                                    src={IDENTITY_ICONS[type]}
                                                    // css={styles.socialIcon}
                                                    className="h-11 w-11"
                                                />
                                            </a>
                                        </div>
                                    )
                                )} */}
                            {/* appleMusic */}
                            {/* <div>
                                <a
                                    href={
                                        socialLink?.appleMusic +
                                        '/' +
                                        user?.identities?.appleMusic
                                    }
                                    target='_blank'>
                                    <img
                                        src={identityIcons?.appleMusic}
                                        // css={styles.socialIcon}
                                        className='h-11 w-11'
                                    />
                                </a>
                            </div> */}

                            {/* {Object.entries(user?.identities).filter(item =>
                                    item.map(data =>(
                                        <div>
                                <a
                                    href={
                                        socialLink?.+
                                        '/' +
                                        user?.identities?.appleMusic
                                    }
                                    target='_blank'>
                                    <img
                                        src={identityIcons?.appleMusic}
                                        // css={styles.socialIcon}
                                        className='h-11 w-11'
                                    />
                                </a>
                            </div>
                                    ))
                            )} */}
                        </div>
                    </div>
                </section>
            </div>
            {/* </div> */}
        </>
    )
}
export default Profile

export const getServerSideProps = async () => {
    const { data } = await axios.get(
        'https://oth-api-test.onetaphello.com/users/get-user-shared-profile/6197f90387cc2c3e6ff2575a'
    )
    return {
        props: {
            user: data
        }
    }
}
