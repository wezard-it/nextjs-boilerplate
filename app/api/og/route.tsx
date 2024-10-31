/**
 * Handles the GET request to generate an Open Graph image.
 *
 * This function processes the incoming request, extracts query parameters,
 * and generates an image response based on the presence of the `candidate` parameter.
 *
 * @param {Request} req - The incoming request object.
 * @returns {Promise<ImageResponse | Response>} - Returns an ImageResponse with the generated image or a Response with an error message.
 *
 * @throws {Error} - Throws an error if image generation fails.
 */

import Logo from '@/public/next.svg'
import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)

        const title = searchParams.get('jobOfferTitle')
        const username = searchParams.get('candidate')

        if (!username) {
            return new ImageResponse(
                (
                    <div
                        style={{
                            padding: '2rem',
                            display: 'flex',
                            background: '#88374A',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                        }}>
                        <Logo
                            fill='#ececec'
                            style={{
                                height: 400,
                                width: 800,
                            }}
                        />
                    </div>
                ),
                {
                    width: 1200,
                    height: 630,
                },
            )
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        borderRadius: '24px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '2rem',
                        display: 'flex',
                        background: '#88374A',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                    }}>
                    <div
                        style={{
                            fontSize: 60,
                            background: '#88374A',
                            width: '100%',
                            height: '100%',
                            padding: '1rem 1rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                            }}>
                            <Logo
                                fill='#ececec'
                                style={{
                                    height: 200,
                                    width: 400,
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginRight: '2rem',
                            }}>
                            <p
                                style={{
                                    textAlign: 'center',
                                    width: '100%',
                                    color: '#ececec',
                                    fontSize: 100,
                                    whiteSpace: 'nowrap',
                                    textTransform: 'capitalize',
                                    fontFamily: 'Manrope, sans-serif',
                                }}>
                                {username}
                            </p>
                            <hr
                                style={{
                                    width: '100%',
                                    height: 2,
                                    border: '2px solid #ececec',
                                    color: '#ececec',
                                }}
                            />
                            <p
                                style={{
                                    textAlign: 'center',
                                    fontSize: 82,
                                    color: '#ececec',
                                    alignSelf: 'flex-end',
                                    fontFamily: 'manrope',
                                }}>
                                {title}
                            </p>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
            },
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        console.log(`${e.message}`)
        console.log(e)
        return new Response(`Failed to generate the image`, {
            status: 500,
        })
    }
}
